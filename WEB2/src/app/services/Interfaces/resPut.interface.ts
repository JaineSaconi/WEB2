export interface IResPut {
  ok: number;
  $clusterTime: {
    clusterTime: string;
    signature: {
      hash: string;
      keyId: string;
    }
  };
  operationTime: string;
  electionId: string;
  n: number;
}
