import {
  addFaqItemApi,
  changeFaqItemApi,
  delFaqItemApi,
  getFaqItemsApi,
  searchFaqItemApi
} from '../../utils/handbook-api';
import {
  createAsyncThunk,
  createSlice,
  SerializedError
} from '@reduxjs/toolkit';
import { TFaqItems } from '../../utils/types.ts';

export const getFaqItems = createAsyncThunk<TFaqItems[], void>(
  'faqItems/getFaqItems',
  async (): Promise<TFaqItems[]> => await getFaqItemsApi()
);

export const addFaqItem = createAsyncThunk<TFaqItems, TFaqItems>(
  'faqItems/addFaqItem',
  async (data: TFaqItems): Promise<TFaqItems> => await addFaqItemApi(data)
);

export const delFaqItem = createAsyncThunk<TFaqItems, number>(
  'faqItems/delFaqItem',
  async (id: number): Promise<TFaqItems> => await delFaqItemApi(id)
);

export const changeFaqItem = createAsyncThunk<
  TFaqItems,
  { id: number; title: string; text: string }
>(
  'faqItems/changeFaqItem',
  async (data: {
    id: number;
    title: string;
    text: string;
  }): Promise<TFaqItems> => await changeFaqItemApi(data)
);

export const searchFaqItem = createAsyncThunk<TFaqItems[], string>(
  'faqItems/searchFaqItem',
  async (str: string): Promise<TFaqItems[]> => await searchFaqItemApi(str)
);

type TFaqItemsState = {
  isLoading: boolean;
  error: null | SerializedError;
  searchStr: string;
  data: TFaqItems[];
};
const initialState: TFaqItemsState = {
  isLoading: true,
  error: null,
  searchStr: '',
  data: []
};

export const faqItemsSlice = createSlice({
  name: 'faqItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFaqItems.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFaqItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getFaqItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(searchFaqItem.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchFaqItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(searchFaqItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(addFaqItem.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFaqItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data.push(action.payload);
      })
      .addCase(addFaqItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(delFaqItem.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(delFaqItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = state.data.filter(
          (item: TFaqItems) => item.id !== action.payload.id
        );
      })
      .addCase(delFaqItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(changeFaqItem.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeFaqItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(JSON.stringify(action.payload));
        const foundFaq = state.data.find(
          (item: TFaqItems) => item.id === action.payload.id
        );
        if (foundFaq) {
          foundFaq.title = action.payload.title;
          foundFaq.text = action.payload.text;
        }
      })
      .addCase(changeFaqItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        console.log('change ERROR');
      });
  }
});

export const {} = faqItemsSlice.actions;
export default faqItemsSlice.reducer;
