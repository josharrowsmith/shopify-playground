import React, { useState } from 'react';
import { Layout, Page } from '@shopify/polaris';
import { TitleBar } from '@shopify/app-bridge-react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { DiscountCodeBasicInput, Order, OrderConnection } from "shopify-admin-api-typings";

const DISCOUNT_CODE = gql`
  mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
  discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
    codeDiscountNode {
      id
    }
    userErrors {
      code
      extraInfo
      field
      message
    }
  }
 }
`;

const QUERY_ORDERS = gql`
  query Orders {
    orders(first: 5) {
      edges {
        node {
          createdAt
        }
      }
    }
  }
`;


function Index() {
  const [addTodo, { data }] = useMutation<DiscountCodeBasicInput>(DISCOUNT_CODE);

  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: 'Select New Products',
          onAction: (e) => {
            addTodo({
              variables: {
                "basicCodeDiscount": {
                  "startsAt": "2021-03-05T19:34:35.948Z",
                  "endsAt": null,
                  "usageLimit": null,
                  "appliesOncePerCustomer": false,
                  "title": "WWFEDXGS9RVZ",
                  "code": "WWFEDXGS9RVZ",
                  "minimumRequirement": {
                    "quantity": {
                      "greaterThanOrEqualToQuantity": null
                    },
                    "subtotal": {
                      "greaterThanOrEqualToSubtotal": null
                    }
                  },
                  "customerGets": {
                    "value": {
                      "percentage": 0.2
                    },
                    "items": {
                      "all": true,
                      "products": null,
                      "collections": null
                    }
                  },
                  "customerSelection": {
                    "all": true,
                    "customerSavedSearches": null,
                    "customers": null
                  }
                }
              }
            });
          }
        }}
      />
    </Page>
  )

}

export default Index;
