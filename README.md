### SWBATS

- Learn about different testing software classifications
- Define Jest and learn how it is used
- test reducers
- use snapshot testing
- Define and integrate enzyme
- test if Child Components are rendering
- test if Components are receiving and rendering props

### Setting up test environment

```
  To add Enzyme: $ yarn add enzyme enzyme-adapter-react-16

  Create setup file called setupTests.js. add the following:

  import { configure } from 'enzyme';
  import Adapter from 'enzyme-adapter-react-16';

  configure({ adapter: new Adapter() });

  to run tests: $ yarn test (or npm test)
```

#### Helpful tricks

- export a 'non-connected' or 'non-combined' version of your components/reducers for easy testing
-

#### Resources

- https://redux.js.org/recipes/writingtests
- https://airbnb.io/enzyme/docs/installation/
- https://reactjs.org/community/testing.html
- https://jestjs.io/docs/en/tutorial-react
