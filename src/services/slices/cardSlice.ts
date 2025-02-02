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
  { menuItemId: number; id: number; text: string; cardIndex: number }
>(
  'cards/changeCard',
  async (data: {
    menuItemId: number;
    id: number;
    text: string;
    cardIndex: number;
  }): Promise<TCard> => await changeCardTextApi(data)
);

export const changeCardImage = createAsyncThunk<
  never,
  { imageName: string; imageFile: File }
>(
  'cards/changeCardImage',
  async ({
    imageName,
    imageFile
  }: {
    imageName: string;
    imageFile: File;
  }): Promise<never> => await changeCardImageApi({ imageName, imageFile })
);

type TCardsState = {
  isLoading: boolean;
  error: null | SerializedError;
  isNewCard: boolean;
  isModalCardOpen:boolean;
  data: TCard[];
};
const initialState: TCardsState = {
  isLoading: true,
  error: null,
  isNewCard: true,
  isModalCardOpen: false,
  data: []
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    isNewCreateCard: (state, action) => {
      state.isNewCard = action.payload;
    },
    setIsModalCardOpen: (state, action) => {
      state.isModalCardOpen = action.payload;
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
      .addCase(changeCardText.pending, (state,) => {
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
          findCard.image = `http://localhost:3005/menuitem/card/images/${action.payload.id}.jpg`;
          findCard.cardIndex = action.payload.cardIndex;
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

export const {
  isNewCreateCard,
  setIsModalCardOpen
} = cardsSlice.actions;
export default cardsSlice.reducer;
