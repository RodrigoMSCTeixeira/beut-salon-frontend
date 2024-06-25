import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

export default function canSSRGuest<T extends { [key: string]: any }>(
  fn: GetServerSideProps<T>
) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    return await fn(context);
  };
}
