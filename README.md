**Add 3 Project features**

1. **Component-Based Architecture**:
   - React encourages the development of applications using a component-based architecture.
   - This approach makes it easier to manage and maintain large-scale applications.

2. **Virtual DOM (Document Object Model)**:
   - React uses a virtual DOM to improve performance.
   - When a component's state changes, React creates a virtual representation of the DOM in memory.
   - React then compares this virtual DOM with the real DOM and only updates the parts of the real DOM that have changed.
   

3. **Declarative Syntax**:
   - React uses a declarative syntax, which means you describe what the UI should look like based on the current application state.
   - Developers specify the desired UI state, and React takes care of updating the DOM to match that state.
   - This approach simplifies the code and makes it more predictable and easier to debug.





**Discuss how i managed the state in my assignment project**

1. **Setting Up the Project**:

   Start by setting up my React project with Tailwind CSS. I can do this by using a tool like `create-react-app` and then adding Tailwind CSS as a dependency. Follow the official documentation for setting up Tailwind CSS in a React project.

2. **Component State**:

   In my React components, i can use local component state to manage data that is specific to that component. I can use the `useState` hook to declare and manage state variables.

   

3. **Props and State Management**:

   If i need to pass state or data between components, i can do so using props. A parent component can manage the state and pass it down to child components as props. Child components can also communicate with parent components through callback functions.

 

4. **Styling with Tailwind CSS**:

   Tailwind CSS classes can be applied directly to my JSX elements to style my components. I can use conditional rendering based on the component's state to apply different styles dynamically.

