import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
  render() {
    return (
      <ins className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-2610476184205193'
        data-ad-slot='1881999710'
        data-ad-format='auto'
        data-full-width-responsive='true' />
    );
  }
}