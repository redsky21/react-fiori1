import React, {useEffect, useState} from 'react';
import './App.css';
import '@ui5/webcomponents/dist/Assets';
import '@ui5/webcomponents-react/dist/Assets';
import '@ui5/webcomponents-fiori/dist/Assets'; // Only if using the @ui5/webcomponents-fiori package
import '@ui5/webcomponents-icons/dist/calendar';
import {
  Avatar,
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Input,
  ShellBar,
} from '@ui5/webcomponents-react';
import {o, ORequest} from '@redsky21/odata';

type LiveToolbarProps = {
  filterText: string;
  onFilterTextChange: (filterText: string) => void;
};
const LiveToolbar: React.FC<LiveToolbarProps> = (props) => {
  const handleFilterTextChange = (e: any) => {
    props.onFilterTextChange(e.target.value);
  };

  return (
    <ShellBar
      primaryTitle="LGE Next Global ERP"
      logo={
        <img
          alt="SAPUI5 Logo"
          src="https://sap.github.io/ui5-webcomponents/assets/images/ui5-logo.png"
        />
      }
      profile={
        <Avatar>
          <img
            alt="Profile"
            src="https://avatars0.githubusercontent.com/u/25473342?s=400&u=b399ebf80c62121616c0435bed3f3c39b4fc9c9b&v=4"
          />
        </Avatar>
      }
      searchField={
        <Input
          value={props.filterText}
          placeholder="Please input ..."
          onInput={handleFilterTextChange}
        />
      }
    />
  );
};

const testOdata =  () => {
  // const { invoicesApi } = firstService();
  // invoicesApi.requestBuilder().getAll().addCustomQueryParameters({language:'en'});
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const odata = require('odata-client');
  // const q = odata({ service: 'http://localhost:8010/proxy/' });
  // q.batch().get('Invoices');
  // q.send();
  // OHandler aa = new OHandler();
  // const invoicesApi = new InvoicesApi();
  // const invoice = new InvoicesRequestBuilder(invoicesApi);
  // invoice.getAll();
  //
  const oHandler = o('http://localhost:3000/api/');
  const myHeaders: HeadersInit = {
    'Accept-Charset': 'utf-8',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'en-US',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/http',
    'Content-Transfer-Encoding': 'binary',
    Accept: 'application/json',
  };
  const url1: URL = new URL(
      'Invoices?$skip=0&$top=100&$orderby=ShipperName%20asc',
      'https://services.odata.org/V2/Northwind/Northwind.svc/'
  );
  // oHandler.get('Invoices').batch();


  const oreq1: ORequest = new ORequest(url1, {
    method: 'GET',
  });
  oreq1.url = url1;
  oHandler.request(oreq1);
  oHandler.request(oreq1);
    oHandler.batch().then((data) => console.log(data));
  // console.log("data!!!!!!!!!!!!:::",data);
  // const oQuery: OdataQuery = {};
  // oHandler.batch(oQuery);
  const calls = [
    {
      method: 'GET',
      url: 'Invoices?$skip=0&$top=100&$orderby=ShipperName%20asc',
      data: 'sap-cancel-on-close: true',
    },
  ];

  // Can add your own headers. Authorization header will be override auth param. Accept and Content-type headers will be ignored.

  const config = {
    url: `http://localhost:8010/proxy/$batch`,
    auth: '******', // base64 string for basic auth
    calls,
  };

  // const batchOperation = new ODataBatch(config);
  //
  // batchOperation
  //   .send()
  //   .then(async function (a) {
  //     console.log(a);
  //   })
  //   .catch(function (e) {
  //     console.error(e);
  //   });
};
function App() {
  const [filterText, setFilterText] = useState<string>('');
  const handleFilterTextChange = (filterText: string) => {
    setFilterText(filterText);
  };
  useEffect(() => {
    testOdata();
  }, []);
  return (
    <FlexBox
      style={{ width: '100%', height: '100%' }}
      direction={FlexBoxDirection.Column}
      justifyContent={FlexBoxJustifyContent.Center}
      alignItems={FlexBoxAlignItems.Center}
    >
      <LiveToolbar
        filterText={filterText}
        onFilterTextChange={handleFilterTextChange}
      />
    </FlexBox>
  );
}

export default App;
