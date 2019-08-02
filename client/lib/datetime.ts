import { format } from 'date-fns';

export const parseTimeAndDate = datetime => format(new Date(datetime), 'MMMM D, h:mm a');
