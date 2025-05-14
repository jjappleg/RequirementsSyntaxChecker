import { ProcessedRequirement } from '../types/requirements';

// Define regex patterns for each EARS category
const patterns = {
  // "the <system name>" (non-greedy)
  systemName: 'the\\s+[\\w\\s\'\'(),]+?',
  
  // "shall <system response>" until the end of line
  systemShall: 'shall\\s+.+$',
  
  // Ubiquitous: The <system name> shall <system response>
  ubiquitous: (systemName: string, systemShall: string) => 
    new RegExp(`^${systemName}\\s+${systemShall}`, 'i'),
  
  // State-Driven: While <precondition>, the <system name> shall <system response>
  stateDriven: (systemName: string, systemShall: string) => 
    new RegExp(`^while\\s+.+?,\\s*${systemName}\\s+${systemShall}`, 'i'),
  
  // Event-Driven: When <trigger>, the <system name> shall <system response>
  eventDriven: (systemName: string, systemShall: string) => 
    new RegExp(`^when\\s+.+?,\\s*${systemName}\\s+${systemShall}`, 'i'),
  
  // Optional Feature: Where <feature>, the <system name> shall <system response>
  optionalFeature: (systemName: string, systemShall: string) => 
    new RegExp(`^where\\s+.+?,\\s*${systemName}\\s+${systemShall}`, 'i'),
  
  // Unwanted Behavior: If <trigger>, then the <system name> shall <system response>
  unwantedBehavior: (systemName: string, systemShall: string) => 
    new RegExp(`^if\\s+.+?,\\s*then\\s+${systemName}\\s+${systemShall}`, 'i'),
  
  // Complex: While <state>, when <event>, the <system name> shall <system response>
  complex: (systemName: string, systemShall: string) => 
    new RegExp(`^while\\s+.+?,\\s*when\\s+.+?,\\s*${systemName}\\s+${systemShall}`, 'i'),
  
  // Complex Unwanted: If <condition>, then (while <state>,)? (when <event>,)? the <system name> shall <system response>
  complexUnwanted: (systemName: string, systemShall: string) => 
    new RegExp(`^if\\s+.+?,\\s*then\\s+(while\\s+.+?,\\s*)?(when\\s+.+?,\\s*)?${systemName}\\s+${systemShall}`, 'i'),
  
  // Complex State-Event: When <event> while <state>, the <system name> shall <system response>
  complexStateEvent: (systemName: string, systemShall: string) =>
    new RegExp(`^when\\s+.+?\\s+while\\s+.+?,\\s*${systemName}\\s+${systemShall}`, 'i'),
  
  // Compound Events: When <event1> and <event2>, the <system name> shall <system response>
  compoundEvents: (systemName: string, systemShall: string) =>
    new RegExp(`^when\\s+.+?\\s+and\\s+.+?,\\s*${systemName}\\s+${systemShall}`, 'i'),
  
  // Temporal: After <duration/event>, the <system name> shall <system response>
  temporal: (systemName: string, systemShall: string) =>
    new RegExp(`^after\\s+.+?,\\s*${systemName}\\s+${systemShall}`, 'i'),
};

/**
 * Check for punctuation and structural issues in the requirement text
 */
const checkPunctuation = (text: string): { status: string; issues: string[] } => {
  const issues: string[] = [];
  
  // Check if text ends with a period, question mark, or exclamation mark
  if (!(/[\.\?\!]$/.test(text))) {
    issues.push('Missing end punctuation');
  }
  
  // Check for multiple consecutive punctuation marks
  if (/[\.\,\?\!]{2,}/.test(text)) {
    issues.push('Multiple consecutive punctuation marks');
  }
  
  // Check for missing commas after introductory clauses
  const hasIntroClause = /^(while|when|if|where|after)\s+.+/.test(text);
  const hasCommaAfterClause = /^(while|when|if|where|after)\s+.+?,/.test(text);
  if (hasIntroClause && !hasCommaAfterClause) {
    issues.push('Missing comma after introductory clause');
  }
  
  // Check for proper spacing around keywords
  if (/\s{2,}/.test(text)) {
    issues.push('Multiple consecutive spaces');
  }
  
  // Check for proper "shall" usage
  if (!/\sshall\s/.test(text)) {
    issues.push('Missing or improperly formatted "shall" keyword');
  }
  
  return {
    status: issues.length ? 'Punctuation issues' : 'Punctuation OK',
    issues
  };
};

/**
 * Analyze a requirement and return the EARS category, punctuation status, and any issues
 */
export const analyzeRequirement = (name: string, text: string): ProcessedRequirement => {
  const trimmedText = text.trim();
  const systemName = patterns.systemName;
  const systemShall = patterns.systemShall;
  
  let category = 'DOES NOT MEET';
  let subtype = '';
  
  // Check for each EARS pattern in order of specificity (most specific first)
  if (patterns.complexStateEvent(systemName, systemShall).test(trimmedText)) {
    category = 'Complex requirement';
    subtype = 'State-Event';
  } else if (patterns.complex(systemName, systemShall).test(trimmedText)) {
    category = 'Complex requirement';
    subtype = 'State-Event';
  } else if (patterns.complexUnwanted(systemName, systemShall).test(trimmedText)) {
    category = 'Complex unwanted behavior requirement';
  } else if (patterns.compoundEvents(systemName, systemShall).test(trimmedText)) {
    category = 'Event-Driven requirement';
    subtype = 'Compound Events';
  } else if (patterns.temporal(systemName, systemShall).test(trimmedText)) {
    category = 'Temporal requirement';
  } else if (patterns.unwantedBehavior(systemName, systemShall).test(trimmedText)) {
    category = 'Unwanted behavior requirement';
  } else if (patterns.optionalFeature(systemName, systemShall).test(trimmedText)) {
    category = 'Optional feature requirement';
  } else if (patterns.eventDriven(systemName, systemShall).test(trimmedText)) {
    category = 'Event-Driven requirement';
  } else if (patterns.stateDriven(systemName, systemShall).test(trimmedText)) {
    category = 'State-Driven requirement';
  } else if (patterns.ubiquitous(systemName, systemShall).test(trimmedText)) {
    category = 'Ubiquitous requirement';
  }
  
  const punctuation = checkPunctuation(trimmedText);
  
  return {
    name,
    text: trimmedText,
    category: subtype ? `${category} (${subtype})` : category,
    punctuation: punctuation.status,
    issues: punctuation.issues
  };
};