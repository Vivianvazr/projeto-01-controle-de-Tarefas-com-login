import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#5b4bff',
    overflow: 'hidden',
  },

  backgroundCircleTop: {
    position: 'absolute',
    width: width * 1.5,
    height: width * 1.5,
    borderRadius: width * 0.75,
    backgroundColor: '#8a8afc',
    top: -width * 0.7,
    left: -width * 0.5,
    opacity: 0.3,
  },

  backgroundCircleBottom: {
    position: 'absolute',
    width: width * 1.2,
    height: width * 1.2,
    borderRadius: width * 0.6,
    backgroundColor: '#2c2c72',
    bottom: -width * 0.6,
    right: -width * 0.4,
    opacity: 0.25,
  },

  titulo: {
    fontSize: 32,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 25,
    zIndex: 1,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 18,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },

  lista: {
    fontSize: 17,
    fontWeight: '500',
    color: '#2c2c72',
  },

  faltoso: {
    textDecorationLine: 'line-through',
    color: '#a3a3c2',
  },

  input: {
    width: '100%',
    backgroundColor: '#f5f7ff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#8a8afc',
    marginBottom: 15,
    fontSize: 16,
    color: '#2c2c72',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  botaoAdicionar: {
    width: '100%',
    backgroundColor: '#7b5fff', // roxo agradável
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 5,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },

  botaoRemover: {
    backgroundColor: '#ff4d6d',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  botaoRemovertodos: {
    backgroundColor: '#ff4d6d',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  textoBotao: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },

  textoBotaor: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
});