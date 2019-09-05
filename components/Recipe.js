import React from 'react';
import { Typography, Divider, Card } from 'antd';

const { Title, Paragraph, Text } = Typography;

import { recipeData } from '../data/recipeData';

function Recipe() {
  console.log('recipeData ->', recipeData);
  return (
    <Card>
      <Typography>
        <Title>{recipeData[0].name}</Title>
        <Paragraph>
          {recipeData[0].description}
        </Paragraph>
        <Paragraph>
          <Text strong>Course: </Text> {recipeData[0].course}
        </Paragraph>
        <Paragraph>
          <Text strong>Cuisine: </Text> {recipeData[0].cuisine}
        </Paragraph>
        <Paragraph>
          <Text strong>Servings: </Text> {recipeData[0].servings}
        </Paragraph>
        <Paragraph>
          <Text strong>Prep Time: </Text> {recipeData[0].prepTime}
        </Paragraph>
        <Paragraph>
          <Text strong>Cook Time: </Text> {recipeData[0].cookTime}
        </Paragraph>
        <Paragraph>
          <Text strong>Total Time: </Text> {recipeData[0].totalTime}
        </Paragraph>
        <Paragraph>
          <Text strong>Link: </Text> {recipeData[0].link}
        </Paragraph>

        <Divider />

        <Title level={3}>Ingredients:</Title>
        <ul>
          {recipeData[0].ingredients.map(ingredient => {
            return (
              <li>{ingredient}</li>
            );
          })}
        </ul>

        <Divider />

        <Title level={3}>Instructions:</Title>
        <ol>
          {recipeData[0].instructions.map(instruction => {
            return (
              <li>{instruction}</li>
            );
          })}
        </ol>


      </Typography>
    </Card>
  )
}

export default Recipe;