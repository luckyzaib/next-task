import { Button, Row, Col } from "antd";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Row gutter={[5, 5]}>
        <Col>
          <Link href="/firstTask">
            <Button>Entries API</Button>
          </Link>
        </Col>
        <Col>
          <Link href="/secondTask">
            <Button>Universities API</Button>
          </Link>
        </Col>
      </Row>
      {children}
    </>
  );
};

export { Layout };
