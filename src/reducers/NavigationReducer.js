import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';
import { Route as HomeRoute } from '../screens/HomeScreen';
import { Route as DetailRoute } from '../screens/DetailScreen';
import { PARKING_SHOW } from '../actions/types';

const firstAction = AppNavigator.router.getActionForPathAndParams(HomeRoute);
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export default function NavigationReducer(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case PARKING_SHOW:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: DetailRoute,
          params: {
            title: action.payload.name,
          },
        }),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
