import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';
import { addFavoriteSuccess, addFavoriteFalure } from '../actions/favorites';

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const isDuplicate = yield select(state => state.favorites.data.find(favorite => favorite.id === data.id));

    if (isDuplicate) {
      yield put(addFavoriteFalure('Repositorio já existe!!'));
    } else {
      const respositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url,
      };

      yield put(addFavoriteSuccess(respositoryData));
    }
  } catch (error) {
    yield put(addFavoriteFalure('Ocorreu um erro ao acessar a API'));
  }
}
