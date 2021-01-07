import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import withData from '../lib/apollo'

import Layout from '../components/Layout'




class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                
                <Layout>
                    <Component {...pageProps} />
                </Layout>            
            </>
        )
    }
}

export default withData(MyApp) 
//Permet d'injecter la donnée dans l'application