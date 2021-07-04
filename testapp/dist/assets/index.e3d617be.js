import { d as defineComponent, c as createBlock, a as createVNode, o as openBlock, F as Fragment, r as renderList, b as createCommentVNode, e as createTextVNode, t as toDisplayString, f as defineComponent$1, g as openBlock$1, h as createBlock$1, i as Fragment$1, j as renderList$1, k as createTextVNode$1, l as toDisplayString$1, m as ref, n as createVNode$1, u as unref, p as createApp } from "./vendor.c3d208da.js";
const _hoisted_1$1 = { key: 0 };
var _sfc_main$1$1 = defineComponent({
  props: {
    obj: { type: Object, required: true }
  },
  emits: {},
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return props.obj ? (openBlock(), createBlock("div", _hoisted_1$1, [
        (openBlock(true), createBlock(Fragment, null, renderList(props.obj, (val, name) => {
          return openBlock(), createBlock(Fragment, null, [
            createTextVNode(toDisplayString(name) + " " + toDisplayString(val), 1)
          ], 64);
        }), 256))
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$2 = { class: "test" };
var _sfc_main$2 = defineComponent({
  props: {
    obj: { type: Object, required: true }
  },
  emits: {},
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock("div", _hoisted_1$2, [
        createVNode(_sfc_main$1$1, {
          obj: props.obj
        }, null, 8, ["obj"])
      ]);
    };
  }
});
const _hoisted_1 = { class: "internal" };
var _sfc_main$1 = defineComponent$1({
  props: {
    obj: { type: Object, required: true }
  },
  emits: {},
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock$1(), createBlock$1("div", _hoisted_1, [
        (openBlock$1(true), createBlock$1(Fragment$1, null, renderList$1(props.obj, (val, name) => {
          return openBlock$1(), createBlock$1(Fragment$1, null, [
            createTextVNode$1(toDisplayString$1(name) + " " + toDisplayString$1(val), 1)
          ], 64);
        }), 256))
      ]);
    };
  }
});
var _sfc_main = defineComponent$1({
  emits: {},
  setup(__props, { emit }) {
    const obj = ref({
      one: 1,
      two: 2
    });
    return (_ctx, _cache) => {
      return openBlock$1(), createBlock$1(Fragment$1, null, [
        createVNode$1(unref(_sfc_main$2), { obj: obj.value }, null, 8, ["obj"]),
        createVNode$1(_sfc_main$1, { obj: obj.value }, null, 8, ["obj"])
      ], 64);
    };
  }
});
createApp(_sfc_main).mount("#app");
