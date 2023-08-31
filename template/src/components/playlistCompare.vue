<!-- eslint-disable no-unused-vars -->
<script setup>
    import { computed, ref } from 'vue'

    
    const playListInput = ref([])
    const mediaTriggerInput = ref([])

    const playlistFileInput = ref('')
    const mediaTriggerFileInput = ref('')

    const playlistFileContent = ref('')
    const mediaTriggerFileContent = ref('')

    
    const compareOutput = ref([])
    const tableRowClassName = ({
        row,
        rowIndex,
    }) => {
        if(row.playListId !== row.mediaTriggerListId){
            return 'danger-row'
        }
        else if (row.error === '1') {
            return 'warning-row'
        } else {
            return 'success-row'
        }
    }

    const playListInputLength = computed(() => playListInput.value.length)
    const mediaTriggerInputLength = computed(() => mediaTriggerInput.value.length)


    function compare(){
        let playListInputSorted = []
        let mediaTriggerListSorted = []
        let comparedList = []

        if(playListInputLength.value > 0 && mediaTriggerInputLength.value > 0 ){
            playListInputSorted = playListInput.value.split(/\r?\n/)
            .filter((data) => data != "")
            const playList = []
            for (let i = 0; i < playListInputSorted.length; i++) {
                const [mediaId, mediaName, duration, scheduleTime] = playListInputSorted[i].split(/\t/)
                if(/^#/.test(mediaId) || mediaId === ''){
                    continue
                }
                playList.push({mediaId, mediaName, duration, scheduleTime})
            }
            mediaTriggerListSorted = mediaTriggerInput.value.split(/\r?\n/).filter((data) => data != "")
            
            const mediaTriggerList = []
            for (let i = 0; i < mediaTriggerListSorted.length; i++) {
                let [ startTime, endTime, mediaId, error ] = mediaTriggerListSorted[i].split("|")
                if(i === 0 && error === '1'){
                    continue
                }
                mediaId = mediaId.slice(0, -1)
                mediaTriggerList.push({startTime, endTime, mediaId, error})    
            }
            comparedList = mediaTriggerList.map((mediaId, index) => {
                let playListIndex = index
                if(playListIndex >= playList.length){
                    playListIndex = index - playList.length
                }
                return {
                    mediaName: playList[playListIndex]['mediaName'], 
                    playListId: playList[playListIndex]['mediaId'], 
                    mediaTriggerListId: mediaTriggerList[index]['mediaId'], 
                    startTime: new Date(mediaTriggerList[index]['startTime'] * 1000).toLocaleString(),
                    endTime: new Date(mediaTriggerList[index]['endTime'] * 1000).toLocaleString(),
                    scheduledTime: playList[playListIndex]['scheduleTime'],
                    duration: playList[playListIndex]['duration'],
                    error: mediaTriggerList[index]['error'],
                }
            })
            compareOutput.value = comparedList
            }
    }

    function handlePlaylistFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            readFile('playlistFileInput', file)
        } 
    }

    function handleMediaTriggerFileChange(event, type) {
        
        const file = event.target.files[0];
        if (file) {
            readFile('mediaTriggerFileInput', file)
        } 
    } 

    function readFile(type, file) {
        const fileReader = new FileReader();
        fileReader.onload = event => {
            if(type === 'mediaTriggerFileInput'){
                mediaTriggerFileInput.value = event.target.result;
                mediaTriggerInput.value = event.target.result;
            } else {
                playlistFileInput.value = event.target.result;
                playListInput.value = event.target.result;
            }
            
        }
        fileReader.readAsText(file);
    }

    function resetPlayList() {
        playListInput.value = ''
        playlistFileInput.value.value = ''
    }

    function resetMediaTrigger() {
        mediaTriggerInput.value = ''
        mediaTriggerFileInput.value.value = ''
    }

</script>
<template>
    <div class="compare">
        <div class="compare_body">
            <div class="compare_content">
                <p> PlayList Cue</p>
                <textarea
                    v-model="playListInput"
                    placeholder=" PlayList Cue "
                ></textarea>
                <input 
                    type="file" 
                    ref="playlistFileInput"
                    :disabled="playListInputLength > 0"
                    @change="handlePlaylistFileChange"
                />
                <el-button 
                    type="info" 
                    @click="resetPlayList"
                > Clear </el-button>
            </div>
            <div class="compare_content">
                <p> Media Trigger Log</p>
                <textarea
                    v-model="mediaTriggerInput" 
                    placeholder="Media Trigger Log list"
                ></textarea>
                <input 
                    type="file" 
                    ref="mediaTriggerFileInput" 
                    :disabled="mediaTriggerInputLength > 0"
                    @change="handleMediaTriggerFileChange"
                />
                <el-button 
                    type="info" 
                    @click="resetMediaTrigger"
                > Clear </el-button>
            </div>
        </div>
        <div>
            <el-button 
                @click="compare()"
                type="primary"    
            > Compare </el-button>
        </div>
        <div class="divider"></div>
        <el-table 
            v-if="compareOutput.length > 0"
            ref="tablelist"
            :data="compareOutput" 
            style="width: 100%"
            :row-class-name="tableRowClassName"
            fixed="left"
            border
        >
            <el-table-column prop="mediaName" label="mediaName" />
            <el-table-column prop="playListId" label="playListId" />
            <el-table-column prop="mediaTriggerListId" label="mediaTriggerListId" />
            <el-table-column prop="startTime" label="startTime" max-width="150" />
            <el-table-column prop="endTime" label="endTime" max-width="150"/>
            <el-table-column prop="scheduledTime" label="scheduledTime" max-width="150"/>
            <el-table-column prop="duration" label="duration" max-width="150"/>
            <el-table-column prop="error" label="error" max-width="80" />
        </el-table>
    </div>
</template>

<style lang="scss">
.divider{
    margin: 10px 0;
    border: 2px solid black;
}

textarea {
    width:500px;
    height:500px;
    background:khaki
}

.compare {
    display: inline-block;
    padding: 2rem;
    margin: 10px;

    &_body {
        display: inline-flex;
    }

    &_content {
        margin: 10px;
    }

    &_result {
        background-color: bisque;
    }
}

.el-table .danger-row {
  --el-table-tr-bg-color: var(--el-color-danger-light-3);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-3);
}
</style>