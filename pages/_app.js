import Head from "next/head"
import { withRouter } from "next/router";

import { wrapper } from "@Src/redux/store";

import App from '@Src/App';

import '@Public/styles/global/reset.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      </Head>
      <App>
        <Component
          {...pageProps}
        />
      </App>
    </>
  )
}

export default wrapper.withRedux(withRouter(MyApp));