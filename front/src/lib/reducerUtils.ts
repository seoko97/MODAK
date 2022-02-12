export interface IErrPayload {
  status: boolean;
  message: string;
}

export interface ReducerInit {
  loading: boolean;
  done: boolean;
  error: string | null;
}

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
