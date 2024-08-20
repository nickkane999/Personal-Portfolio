export interface Task {
  title?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  estimatedTime?: string;
  hidden?: boolean; // Add hidden attribute
}

export interface TaskCardProps {
  initialTitle?: string;
  initialDescription?: string;
  initialStartDate?: string;
  initialEndDate?: string;
  initialEstimatedTime?: string;
}

export interface TaskCardEditableProps {
  initialTitle?: string;
  initialDescription?: string;
  initialStartDate?: string;
  initialEndDate?: string;
  initialEstimatedTime?: string;
  initialHidden?: boolean; // Initial value for hidden attribute
  onTaskUpdate: (updatedTask: Task) => void; // Pass a callback to handle updates
}
