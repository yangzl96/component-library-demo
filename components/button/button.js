import { h, defineComponent } from "vue";
import "./index.less";

export default defineComponent({
  name: "JinkeButton",
  props: {
    type: {
      type: String,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  slots: ["icon"],
  setup(props, { attrs, slots, emit, expose }) {
    expose({
      type: props.type,
      rounded: props.rounded,
      test: () => {
        console.log("expose test");
      },
    });
    return () =>
      h(
        "button",
        {
          class: {
            "jinke-button": true,
            [`jinke-button-${props.type}`]: props.type,
            "jinke-button-rounded": props.rounded,
          },
        },

        [
          h(
            "span",
            {
              onClick: e => {
                emit("iconClick", e);
              },
            },
            slots.icon?.({
              type: props.type,
            })
          ),
          h("span", null, slots.default()),
        ]
      );
  },
});
