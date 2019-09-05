import React from 'react';
import { Card, Col, Row, Divider } from 'antd';

import Recipe from './Recipe';

function CardContainer() {

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={24}>
          <Recipe />
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Recipe 1 Title" bordered={false}>
            Recipe Description
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Recipe 2 Title" bordered={false}>
            Recipe Description
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Recipe 3 title" bordered={false}>
            Recipe Description
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default CardContainer;