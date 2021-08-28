import React, { ChangeEvent } from "react";
import IInputTypes from "types/IInputTypes";
import * as S from "./styles";

export const DynamicTextInput: React.FC<Props> = ({
  value,
  field,
  updateField,
}) => {
  const key = field.toLowerCase().replaceAll(" ", "");
  const renderTextInput = (field: IInputTypes["field"]) => {
    switch (field) {
      case "Web Site Url":
      case "Email":
      case "Phone":
        return (
          <S.UserPropertyInput
            field={field}
            value={value}
            onChange={updateField}
            name={key}
            placeholder={field}
          />
        );
      case "First Name":
      case "Last Name":
        return (
          <>
            <S.Label>{field}</S.Label>
            <S.NameInput
              field={field}
              value={value}
              name={key}
              onChange={updateField}
              placeholder={field}
            />
          </>
        );
      default:
        return (
          <>
            <S.Label>{field}</S.Label>
            <S.AddressInput
              field={field}
              name={key}
              onChange={updateField}
              value={value}
              placeholder={field}
            />
          </>
        );
    }
  };

  return <S.TextInputContainer>{renderTextInput(field)}</S.TextInputContainer>;
};

type Props = {
  value: string;
  field: IInputTypes["field"];
  updateField: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default DynamicTextInput;
