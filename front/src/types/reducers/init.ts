export interface IErrPayload {
  status: boolean;
  message: string;
}

export interface ReducerInit {
  loading: boolean;
  done: boolean;
  error: string | null;
}
