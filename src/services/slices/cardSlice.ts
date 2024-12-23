import {
  addCardApi,
  changeCardImageApi,
  changeCardTextApi,
  delCardApi,
  getCardsApi
} from '../../utils/handbook-api';
import {
  createAsyncThunk,
  createSlice,
  SerializedError
} from '@reduxjs/toolkit';
import { TCard } from '../../utils/types.ts';
import { PayloadAction } from '@reduxjs/toolkit';

export const getCards = createAsyncThunk<TCard[], number>(
  'cards/getCards',
  async (menuItemId: number): Promise<TCard[]> => await getCardsApi(menuItemId)
);

export const addCard = createAsyncThunk<TCard, TCard>(
  'cards/addCard',
  async (newCard: TCard): Promise<TCard> => await addCardApi(newCard)
);

export const delCard = createAsyncThunk<
  TCard,
  { menuItemId: number; id: number }
>(
  'cards/delCard',
  async ({
    menuItemId,
    id
  }: {
    menuItemId: number;
    id: number;
  }): Promise<TCard> => await delCardApi(menuItemId, id)
);

export const changeCardText = createAsyncThunk<
  TCard,
  { menuItemId: number; id: number; text: string }
>(
  'cards/changeCard',
  async (data: {
    menuItemId: number;
    id: number;
    text: string;
  }): Promise<TCard> => await changeCardTextApi(data)
);

export const changeCardImage = createAsyncThunk<
  any,
  { imageName: string; imageFile: File }
>(
  'cards/changeCardImage',
  async ({
    imageName,
    imageFile
  }: {
    imageName: string;
    imageFile: File;
  }): Promise<any> => await changeCardImageApi({ imageName, imageFile })
);

type TCardsState = {
  isLoading: boolean;
  error: null | SerializedError;
  data: TCard[];
};
const initialState: TCardsState = {
  isLoading: true,
  error: null,
  data: []
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    // Удаление карточки по ID
    removeCard: (
      state,
      action: PayloadAction<{ menuItemId: number; id: number }>
    ) => {
      state.data = state.data.filter((card) => card.id !== action.payload.id);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(addCard.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data.push(action.payload);
      })
      .addCase(addCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(changeCardText.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeCardText.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const findCard = state.data.find(
          (item) => item.id === action.payload.id
        );
        if (findCard) {
          findCard.text = action.payload.text;
          findCard.image = `http://localhost:3001/menuitem/card/images/${action.payload.id}.jpg`;
        }
      })
      .addCase(changeCardText.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(delCard.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(delCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      })
      .addCase(delCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  }
});

export const { removeCard } = cardsSlice.actions;
export default cardsSlice.reducer;
