'use client'

import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function App() {

  return (
    <>
 <Layout>
      <Navbar isCompact isBordered  variant="floating">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
       
        <Navbar.Content>

            <Navbar.Item>
        <p>Juan</p>
            </Navbar.Item>
          <Navbar.Item>
<p>Pepe</p>
          </Navbar.Item>
          
        </Navbar.Content>
      </Navbar>
    </Layout>
    
    </>
   
  )
}