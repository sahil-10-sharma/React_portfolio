import React from "react";
import { Component } from "react"
import Head from "next/head"

export default class extends Component {
  render() {
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.metaDescription} />
        <script src="https://kit.fontawesome.com/02dc81b548.js" crossorigin="anonymous"></script>
        

      </Head>
    )
  }
}