import React from 'react';
import { List, Col, Row } from 'antd';

function ListContainer() {
  const data = [
    {title: 'Ant Design Title 1',},
    {title: 'Ant Design Title 2',},
    {title: 'Ant Design Title 3',},
    {title: 'Ant Design Title 4',},
  ];

  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row gutter={16}>
        <Col span={24}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <a href="https://ant.design">
                      {item.title}
                    </a>
                  }
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  )
}

export default ListContainer;