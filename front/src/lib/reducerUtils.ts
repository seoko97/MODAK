import { IErrPayload, ReducerInit } from "@src/types/reducers/init";

export const asyncPending = (state: ReducerInit) => {
  state.loading = true;
  state.done = false;
  state.error = null;
};

export const asyncFulfilled = (state: ReducerInit) => {
  state.loading = false;
  state.done = true;
  state.error = null;
};

export const asyncRejected = (state: ReducerInit, payload: IErrPayload) => {
  const { message } = payload;

  state.loading = true;
  state.done = false;
  state.error = message;
};

export const reducerUtils = {
  init: () => ({
    done: false,
    loading: false,
    error: null,
  }),

  loading: () => ({
    done: false,
    loading: true,
    error: null,
  }),

  success: () => ({
    done: true,
    loading: false,
    error: null,
  }),

  error: (error: Error) => ({
    done: false,
    loading: false,
    error: error.message,
  }),
};
