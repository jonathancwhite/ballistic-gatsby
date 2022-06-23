import React from 'react'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const HubspotForm = () => {
    useEffect(() => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "19492985",
            formId: "9142183f-8dd5-406c-b144-f08114d57414",
            target: "#hubspotForm"
          });
        }
      },[window.hbspt])
    return (
    <>
    <Helmet>
      <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"> </script>
    </Helmet>
    <div id='#hubspotForm'></div>
    </>
    )
}

export default HubspotForm