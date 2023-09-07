<!-- eslint-disable no-unused-vars -->
<script setup>
import { View as IconView } from '@element-plus/icons-vue'

import { ref, watch } from 'vue'

const selectedValue = ref('')
const selectedIndexValue = ref('124b56e0-1c9b-11ee-a399-6f2a78896acd')
const selectedRangeValue = ref('')
const textarea = ref('')
const rangeText = ref('')
const params = ref([])
const URL = `http://172.16.51.115:5601/app/discover#/?_g=(time:(from:now-1d,to:now))&_a=(columns:!(_source),filters:!(),interval:auto,sort:!(),index:'{index_id}',)`
const url = ref('')

const indexOptions = [
  {
    value: '9e547550-1ca9-11ee-a399-6f2a78896acd',
    label: 'Hinet',
  },
  {
    value: '3a31f4e0-1ca8-11ee-a399-6f2a78896acd',
    label: 'PIC',
  },
  {
    value: '124b56e0-1c9b-11ee-a399-6f2a78896acd',
    label: 'Office',
  },
]

const options = [
  {
    value: 'log.message',
    label: 'log.message',
  },
  {
    value: 'type',
    label: 'type',
  },
  {
    value: 'machine_id',
    label: 'machine_id',
  },
  {
    value: 'StoreID',
    label: 'StoreID',
  },
]

const rangeOptions = [
  {
    value: 'w',
    label: '週',
  },
  {
    value: 'd',
    label: '日',
  },
  {
    value: 'h',
    label: '小時',
  },
  {
    value: 'm',
    label: '分鐘',
  },
  {
    value: 's',
    label: '秒',
  },
]
const textareaList = ref([])
watch(
  () => selectedValue.value, 
  (newValue, oldValue) => {
    textareaList.value = []
    Object.values(newValue).map((data) =>{
        textareaList.value.push({
          option: data,
          inputValue: '',
          checkBoxValueValue: false
        })
    })
})


function clearParams(){
  textarea.value = ''
  selectedValue.value = ''
  textareaList.value = []
  params.value = []
  url.value = ''
}

function addParams(){
  if(!textareaList.value || !selectedValue.value) return 

  if(textareaList.value.length > 0){
    let queryText = ''
    textareaList.value.map((data, index) => {
      console.log(textareaList.value, selectedValue.value, data)
      if(index > 0) {
        queryText += `%20AND%20`
      }
      if(data.checkBoxValue){
        queryText += `NOT%20`
      }
      queryText += `${encodeURIComponent(data.option)}:%20${encodeURIComponent(data.inputValue)}` 

    })
    params.value.push(queryText)
  }else{  
    params.value.push( `${encodeURIComponent(textareaList.value[0].option)}:%20${encodeURIComponent(textareaList.value[0].value)}` )
  }
  textareaList.value = []
  selectedValue.value = ''
}

function generateUrl(){
  if(rangeText.value != ''){
    url.value = URL.replace('-1d', `-${rangeText.value}${selectedRangeValue.value}` )
  }else{
    url.value= URL
  }
  
  let query = `query:(language:kuery,query:)`
  let paramString = ''
  

  params.value.map((data, index) => {
    if(index !== 0){
      paramString += encodeURIComponent(' OR ')
    } else {
      paramString += "'"
    }
    
    paramString += '(' + data +')'

    if(index === params.value.length - 1) {
      paramString += "'"
    }
  })
  
  query = query.slice(0, query.indexOf(')')) + paramString + query.slice(query.indexOf(')'))

  url.value = url.value.replace('{index_id}', selectedIndexValue.value || '124b56e0-1c9b-11ee-a399-6f2a78896acd')
  url.value = url.value.slice(0, -1) + query + url.value.slice(-1)
  
}


</script>
<template>
  <el-card>
    <div>
      <p> Select one of the indices</p>
      <el-select v-model="selectedIndexValue" class="m-2" placeholder="select Index" size="large">
        <el-option
          v-for="item in indexOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <p> Select type of range</p>
      <el-input
        v-model="rangeText"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #append >
          <el-select v-model="selectedRangeValue" placeholder="Select" style="width: 130px">
            <el-option
              v-for="item in rangeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
      </el-input>
      <p> Select one of the parameter to search </p>
      <div class="paramsOption">
        <!-- <el-input
          v-model="textarea"
          placeholder="Please input"
          class="input-with-select"
        >
          <template #prepend>
            <el-select 
              v-model="selectedValue" 
              placeholder="Select" 
              style="width: 130px"
              multiple="true"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
          <template #append>
            <el-button
              type="primary"
              @click="addParams"
            > add </el-button>
          </template>
        </el-input> -->
        <el-select 
          v-model="selectedValue" 
          placeholder="Select" 
          multiple
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <div
          v-for="(model, index) in textareaList"
          :key="model"
          
        >
          <p> search for {{ model.option }} </p>
          <div class="querySection">
            <el-input
              v-model="model.inputValue" 
              :placeholder="'Input ' + (index + 1)"
              class="textarea"
            ></el-input> 
            <el-checkbox 
              v-model="model.checkBoxValue" 
              label="Not" 
              border
            />
          </div>
          
        </div>
        <el-button
          v-if="textareaList.length > 0"
          type="primary"
          @click="addParams"
        > add </el-button>
        <div>
          <el-button
            type="success"
            v-if="params.length > 0"
            @click="generateUrl"
            class="generateUrl"
          > Generate Url </el-button>
          <el-button
            type="info"
            v-if="params.length > 0"
            @click="clearParams"
            class="generateUrl"
          > Clear </el-button>
        </div>
        <div
          class="searchParameter">
          <el-row>search parameters:  </el-row>
          <div
            v-for="(param, index) in params"
            :key="param"  
            class="parameterList"
          >
            <el-row  class="grid-content ep-bg-purple" > 
              <div> 
                {{index + 1}}. {{ decodeURIComponent(param) }} 
              </div>
            </el-row>
          </div>
        </div>
      </div>

      <div
        v-if="url"
        :class="url ? 'success' : 'empty'"
      >
        <el-link  
          :href="url"
        >
          Link<el-icon class="el-icon--right"><icon-view /></el-icon>
        </el-link>
      </div>
    </div>
  </el-card>
</template>
<style scoped>
.paramsOption{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.textarea{
   margin: 10px;
}

.success {
  margin: 2rem;
  margin-left: 25%;
  width: 50%;
  padding: 10px;
  background-color: var(--el-color-success-light-9);
}

.el-link {
  margin-right: 8px;
}

.el-input-group{
  width: 50%;
}

.searchParameter {

  margin: 1rem;
  .parameterList {
    margin: 1rem;
    font-weight: 400;
    background-color: lightblue;
  }
}

.generateUrl {
  margin: 1rem;
}

.querySection{
  display: flex;
  align-items: center;

}

</style>