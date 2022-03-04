export const progressCartConfig ={
    backgroundColor: '#1e2833',
    backgroundGradientFrom: '#DCF5FF',
    backgroundGradientTo: '#DCF5FF',
    decimalPlaces: 2,
    color: (opacity = 9) => `rgba(30, 40, 51, ${opacity})`,
    labelColor: (opacity = 9) => `rgba(0, 0,0, ${opacity})`,
    style: {
        borderRadius: 16,
    },
    barPercentage: 1,
    useShadowColorFromDataset: false,
};