import React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
/* import {NavigationContainer} from '@react-navigation/native';
import ExamSchedule from '../screens/Schedule/ExamSchedule/ExamSchedule';
import ScheduleHome from '../screens/Schedule/ScheduleHomePage/ScheduleHome';
import InvigilationDuties from '../screens/Schedule/InvigilationDuties/InvigilationDuties';
import AcademicSchedule from '../screens/Schedule/AcademicSchedule/AcademicSchedule';
import WeeklySchedule from '../screens/Schedule/WeeklySchedule/WeeklySchedule';
import {ExamProvider} from '../screens/Schedule/ExamSchedule/ExamContext'; */
/* import MaterialHome from '../screens/Material/MaterialHomePage/MaterialHome';
 import Tamil from '../screens/Material/Tamil/Tamil';
 import English from '../screens/Material/English/English';
 import Mathematics from '../screens/Material/Mathematics/Mathematics';
 import Science from '../screens/Material/Science/Science';
 import SocialScience from '../screens/Material/SocialScience/SocialScience';
 import LevelPromotion from '../screens/Material/LevelPromotion/LevelPromotion'; */
/*  import RequestHome from '../screens/Request/Request';
  import GeneralActivity from '../screens/Request/GeneralActivity';
  import RequestUpload from '../screens/Request/RequestUpload'; */
 import Event from '../screens/Event/Event'; 
const Stack = createStackNavigator();

const AppLayout = () => {
  return (
    <SafeAreaProvider>
     {/*  <ExamProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ScheduleHome">
            <Stack.Screen
              name="ScheduleHome"
              component={ScheduleHome}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ExamSchedule"
              component={ExamSchedule}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="InvigilationDuties"
              component={InvigilationDuties}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AcademicSchedule"
              component={AcademicSchedule}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="WeeklySchedule"
              component={WeeklySchedule}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExamProvider> */}
      {/* <NavigationContainer>
         <Stack.Navigator initialRouteName="MaterialHome">
            <Stack.Screen
              name="MaterialHome"
              component={MaterialHome}
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="Tamil" 
              component={Tamil} 
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="English" 
              component={English} 
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="Mathematics" 
              component={Mathematics} 
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="Science" 
              component={Science} 
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="SocialScience" 
              component={SocialScience} 
              options={{headerShown: false}}
            />
            <Stack.Screen 
              name="LevelPromotion" 
              component={LevelPromotion} 
              options={{headerShown: false}}
            />
          </Stack.Navigator>
      </NavigationContainer> */}
           {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="RequestHome">
          <Stack.Screen
            name="RequestHome"
            component={RequestHome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GeneralActivity"
            component={GeneralActivity}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RequestUpload"
            component={RequestUpload}
            options={{headerShown: false}}
          />
           </Stack.Navigator>
          </NavigationContainer>     */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Event">
          <Stack.Screen
            name="Event"
            component={Event}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppLayout;
