## Exercise

#### Implement the "Like" functionality. 

When a user clicks the "Like" button below a post, the button is highlighted (to indicate that it is selected) and the number of likes is increased. 

You're going to implement this feature in Angular and for that you'll need to create a component. This component is a TypeScript class that encapsulates the data for rendering the like button. It also responds to user actions. So, when the user clicks the "Like" button, the number of likes should be increased and the button should be in the "selected/on" state. If the user clicks the button again, the number of likes should be decreased and the button should be in the "unselected" state. 

#### Specifications 

The consumer of this class can pass the initial number of likes when creating an instance of this class. 

This class must be defined in a separate module and used in the main module. 