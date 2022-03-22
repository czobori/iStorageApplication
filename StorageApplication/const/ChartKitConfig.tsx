import * as Colors from "../const/colors";
export const progressCartConfig ={
    backgroundColor: Colors.topnavbar,
    backgroundGradientFrom: Colors.lightblue,
    backgroundGradientTo: Colors.lightblue,
    decimalPlaces: 2,
    color: (opacity = 9) => `rgba(30, 40, 51, ${opacity})`,
    labelColor: (opacity = 9) => `rgba(0, 0,0, ${opacity})`,
    style: {
        borderRadius: 16,
    },
    barPercentage: 1,
    useShadowColorFromDataset: false,
};