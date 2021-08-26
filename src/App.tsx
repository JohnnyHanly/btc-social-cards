import React, { useEffect, useState } from "react";
import { AppContainer } from "./styles";
import faker, { company } from "faker";
import { SocialCards } from "domains/SocialCards/SocialCards";

function App() {
  useEffect(() => {
    var test = {
      name: faker.name.firstName() + faker.name.lastName(),
      address: faker.address.streetAddress(),
      phone: faker.phone.phoneNumber(),
      website: faker.internet.domainName(),
      company: faker.company.companyName(),
      companyDesc: faker.company.catchPhrase(),
      city: faker.address.citySuffix(),
    };
    console.log(test);
  });
  return (
    <AppContainer>
      <SocialCards />
    </AppContainer>
  );
}

export default App;
