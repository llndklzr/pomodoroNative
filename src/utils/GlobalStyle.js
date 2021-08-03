import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  splashGroup: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666666',
  },
  splashTitle: {
    fontSize: 36,
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  mainBody: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#666666',
    alignItems: 'center',
  },
  buttonGroup: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroupLabel: {
    fontFamily: 'monospace',
    color: '#ffffff',
    fontSize: 30,
    marginHorizontal: 10,
  },
  sessionTotalLabel: {
    fontFamily: 'monospace',
    color: '#ffffff',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  button: {
    padding: 5,
  },
  progressBarContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBarLabel: {
    fontFamily: 'monospace',
  },
});
