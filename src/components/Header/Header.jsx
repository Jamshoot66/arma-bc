import React from "react";
import { useDispatch } from "react-redux";
import actions from "store/actions";
import types from "types";
import { Caption, Wrapper, Settings, Bar } from "./Header-ui";

function Header() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Bar>
        <Caption>Header</Caption>
        <Settings
          onClick={() =>
            dispatch(
              actions.openModal({
                modal: {
                  title: types.modal.MODAL_SETTINGS.title,
                  component: types.modal.MODAL_SETTINGS.type,
                },
              }),
            )
          }
        />
      </Bar>
    </Wrapper>
  );
}

export default Header;
