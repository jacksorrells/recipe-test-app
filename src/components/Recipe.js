import React from 'react';
import { Typography, Divider, Card, Row, Col } from 'antd';
import { recipeData } from '../data/recipeData';

const { Title, Paragraph, Text } = Typography;



function Recipe() {
  console.log('recipeData ->', recipeData);
  return (
    <Card>
      <Typography>
        <Title level={1}>
          <a href={recipeData[0].url} target="_blank">
            {recipeData[0].name}
          </a>
        </Title>

        <Paragraph>
          {recipeData[0].description}
        </Paragraph>

        <Row>
          <Col span={12}>

            <Paragraph>
              <Text strong>Course: </Text> {recipeData[0].course}
            </Paragraph>
            <Paragraph>
              <Text strong>Cuisine: </Text> {recipeData[0].cuisine}
            </Paragraph>
            <Paragraph>
              <Text strong>Servings: </Text> {recipeData[0].servings}
            </Paragraph>

          </Col>

          <Col span={12}>

            <Paragraph>
              <Text strong>Prep Time: </Text> {recipeData[0].prepTime}
            </Paragraph>
            <Paragraph>
              <Text strong>Cook Time: </Text> {recipeData[0].cookTime}
            </Paragraph>
            <Paragraph>
              <Text strong>Total Time: </Text> {recipeData[0].totalTime}
            </Paragraph>
        
          </Col>
        </Row>

        <Divider />

        <Row>
          <Col>
            <Title level={3}>Ingredients:</Title>
            <ul>
              {recipeData[0].ingredients.map(ingredient => {
                return (
                  <li>{ingredient}</li>
                );
              })}
            </ul>
          </Col>
        </Row>

        <Divider />

        <Row>
          <Col>

            <Title level={3}>Instructions:</Title>
            <ol>
              {recipeData[0].instructions.map(instruction => {
                return (
                  <li>{instruction}</li>
                );
              })}
            </ol>

          </Col>
        </Row>

      </Typography>
    </Card>
  )
}

export default Recipe;