<template>
  <div class="other">
    <div class="box sort">
      <div class="title">列表过滤与排序</div>
      <input type="text" v-model="searchName" />
      <ul>
        <li v-for="(p, index) in filterPersons" :key="index">
          {{ index }}----{{ p.name }}----{{ p.age }}
        </li>
      </ul>
      <br />
      <button @click="setOrderType(1)">年龄升序</button>
      <button @click="setOrderType(2)">年龄降序</button>
      <button @click="setOrderType(0)">原本顺序</button>
    </div>
    <div class="box father-child">
      <div class="title">父子组件传参</div>
      <div class="content">
        <FatherChild></FatherChild>
      </div>
    </div>
    <div class="box mixin">
      <div class="title">mixin混入</div>
      <button @click="getMixin()">获取mixin中的值</button><br />
      <span>{{ mixin_res }}</span>
    </div>
    <div class="box assign">
      <div class="title">assign对象合并</div>
      <div class="item">
        {{ obj1 }}<br />
        {{ obj2 }}<br />
        {{ obj3 }}<br />
      </div>
      <div class="answer">{{ Object.assign(obj1, obj2, obj3) }}</div>
    </div>
    <div class="box">
      <div class="title">地图市级数据</div>
      <button @click="getMapData()">获取市级地区数据</button>
      <div class="res">{{ map_res }}</div>
    </div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
import FatherChild from "../../../components/father-child/father.vue";
import capMixin from "../../../mixins/index";
import { convert } from "@/utils/mapData";
export default {
  mixins: [capMixin],
  data() {
    return {
      orderType: 0, //0原本排序， 1：升序，  2：降序
      searchName: "",
      persons: [
        // vue只是监视了persons的改变， 没有监视persons内部数组的改变
        { name: "Tom", age: 12 },
        { name: "Admin", age: 13 },
        { name: "Root", age: 16 },
        { name: "Rose", age: 10 },
      ],
      mixin_res: "",
      obj1: { name: "cap" },
      obj2: { sex: "女" },
      obj3: { age: 23 },
      map_res: "",
    };
  },
  computed: {
    // 列表过滤与排序
    filterPersons() {
      const { searchName, persons, orderType } = this;
      // 过滤 indexOf检索（-1：没有检索到，0/1/2：检索到返回索引值）
      let fPersons = persons.filter((p) => p.name.indexOf(searchName) !== -1);
      // 排序
      if (orderType !== 0) {
        fPersons.sort(function (p1, p2) {
          if (orderType === 2) {
            // 降序
            return p2.age - p1.age;
          }
          // 升序
          return p1.age - p2.age;
        });
      }
      return fPersons;
    },
  },
  components: {
    FatherChild,
  },
  methods: {
    // 列表过滤与排序
    setOrderType(num) {
      this.orderType = num;
    },
    // mixin使用
    getMixin() {
      this.mixin_res = this.getMsgMixin();
    },
    // 获取市级数据mapdata
    getMapData() {
      let name = "广州市";
      this.map_res = convert(name);
    },
  },
};
</script>

<style lang="less" scoped>
.other {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  .box {
    width: 18%;
    height: 40%;
    margin-left: 1%;
    border: 1px solid #000;

    .title {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      background-color: #2f3033;
      margin-bottom: 10px;
    }
  }

  .sort {
    ul {
      margin-top: 10px;
    }
    button {
      margin-right: 10px;
    }
  }

  .father-child {
    .content {
      width: 90%;
      height: 238px;
      margin: 4%;
    }
  }

  .mixin {
    button {
      margin: 0 0 10px 10px;
    }
  }
}
</style>
