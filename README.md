# Task Tracker

## Objective
Build a simple React app to manage daily tasks effectively.

## Preview
<div>
<img src="https://drive.google.com/uc?id=1X66xk_wzSkaB6oZBZpKKcY7z4ugtAdzc" alt="Task Screenshot" />
</div>

## Features
### Core Functionalities
1. **Add Task**:  
   - A form to add a new task with the following fields:
     - Title
     - Description
     - Due Date
     - Status (Pending, In Progress, Completed)

2. **View Tasks**:  
   - Display a list of tasks in a **table** or **card layout** for better visibility.

3. **Edit Task**:  
   - Edit tasks either **inline** or using a **modal-based editor**.

4. **Delete Task**:  
   - Delete tasks with a **confirmation prompt** for user safety.

### State Management
- Managed local state using `useState` for simplicity.

### Styling
- **Responsive Design**:
  - Styled using plain CSS or frameworks such as Bootstrap or Tailwind CSS.
  - Ensures the app is user-friendly across different devices.

### Data Persistence
- Tasks are stored in the browser's **Local Storage** for session persistence.

---

## Bonus Features (Optional)
1. **Filters and Sorting**:
   - Filter tasks by **status**.
   - Sort tasks by **due date** or other criteria.

2. **Advanced State Management**:
   - Utilize `useContext` or **Redux** for managing global state.

---

## Requirements
1. **React Framework**:
   - Developed using React's core functionalities.
2. **Local Storage**:
   - Used for storing and retrieving task data.
3. **Responsiveness**:
   - The design adapts seamlessly to mobile, tablet, and desktop screens.

---

## Installation and Setup
1. Clone this repository:
   ```bash
   git clone https://github.com/username/task-tracker.git
