import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";

import { test } from '../redux/actions/test'

const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(test())
  }, [])

  return (
    <div>
      <Head>
        <title>Главная страница</title>
        <meta name="description" content="Это главная страница" />
      </Head>
      <h1>Index page</h1>
    </div>
  )
}

export default Index