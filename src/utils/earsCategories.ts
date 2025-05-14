/**
 * Get a description of each EARS category
 */
export const getCategoryDescription = (category: string): string => {
  switch (category) {
    case 'Ubiquitous requirement':
      return 'A basic requirement that applies universally without preconditions. Format: "The <system name> shall <system response>"';
      
    case 'Event-Driven requirement':
      return 'A requirement triggered by an event. Format: "When <trigger>, the <system name> shall <system response>"';
      
    case 'Event-Driven requirement (Compound Events)':
      return 'A requirement triggered by multiple events. Format: "When <event1> and <event2>, the <system name> shall <system response>"';
      
    case 'State-Driven requirement':
      return 'A requirement that applies in a specific state. Format: "While <precondition>, the <system name> shall <system response>"';
      
    case 'Unwanted behavior requirement':
      return 'A requirement for handling exceptions. Format: "If <trigger>, then the <system name> shall <system response>"';
      
    case 'Optional feature requirement':
      return 'A requirement for an optional system feature. Format: "Where <feature>, the <system name> shall <system response>"';
      
    case 'Complex requirement (State-Event)':
      return 'A requirement combining state and event conditions. Two valid formats:\n1. "While <state>, when <event>, the <system name> shall <system response>"\n2. "When <event> while <state>, the <system name> shall <system response>"';
      
    case 'Complex unwanted behavior requirement':
      return 'An unwanted behavior with additional conditions. Format: "If <condition>, then (while <state>,)? (when <event>,)? the <system name> shall <system response>"';
      
    case 'Temporal requirement':
      return 'A requirement that specifies timing or sequence. Format: "After <duration/event>, the <system name> shall <system response>"';
      
    case 'DOES NOT MEET':
      return 'The requirement does not conform to any EARS pattern. Consider reformulating it to follow one of the EARS templates.';
      
    default:
      return 'No description available for this category.';
  }
};