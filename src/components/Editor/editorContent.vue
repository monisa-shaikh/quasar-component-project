<template>
  <q-page>
  
    <!-- first card for Default editor -->
    <div class="row items-start">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Default editor</div>
         
        </q-card-section>

        <q-card-section>
          <!-- code for Default editor-->
            <div class="q-gutter-sm">
                <q-editor v-model="editor" min-height="5rem" />

                <q-card flat bordered>
                <q-card-section>
                    <pre style="white-space: pre-line">{{ editor }}</pre>
                </q-card-section>
                </q-card>

                <q-card flat bordered>
                <q-card-section v-html="editor" />
                </q-card>
            </div>
          <!-- End code for Default editor -->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End first card for Default editor-->

  

    <!-- Second card for Redefine bold command-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Redefine bold command</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for Redefine bold command -->
          <div class="q-gutter-sm">
                <q-editor
                v-model="editor"
                :definitions="{
                    bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
                }"
                />
            </div>
          <!-- End Code for Redefine bold command-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Second card for Redefine bold command -->

    <!-- <h5 class="text-blue-5 q-mb-sm">With icon</h5> -->

    <!-- third card for Add new commands-->

    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Add new commands</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for Add new commands -->
             <div class="q-gutter-sm">
                <q-editor
                v-model="editor2"
                :definitions="{
                    save: {
                    tip: 'Save your work',
                    icon: 'save',
                    label: 'Save',
                    handler: saveWork
                    },
                    upload: {
                    tip: 'Upload to cloud',
                    icon: 'cloud_upload',
                    label: 'Upload',
                    handler: uploadIt
                    }
                }"
                :toolbar="[
                    ['bold', 'italic', 'strike', 'underline'],
                    ['upload', 'save']
                ]"
                />
            </div>
          <!-- End Code for Add new commands-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End third for Add new commands -->


    <!-- fourth card Kitchen sink-->
    
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Kitchen sink</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for Kitchen sink-->
        <div class="q-gutter-sm">
                <q-editor
                v-model="qeditor"
                :dense="$q.screen.lt.md"
                :toolbar="[
                    [
                    {
                        label: $q.lang.editor.align,
                        icon: $q.iconSet.editor.align,
                        fixedLabel: true,
                        list: 'only-icons',
                        options: ['left', 'center', 'right', 'justify']
                    },
                    {
                        label: $q.lang.editor.align,
                        icon: $q.iconSet.editor.align,
                        fixedLabel: true,
                        options: ['left', 'center', 'right', 'justify']
                    }
                    ],
                    ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                    ['token', 'hr', 'link', 'custom_btn'],
                    ['print', 'fullscreen'],
                    [
                    {
                        label: $q.lang.editor.formatting,
                        icon: $q.iconSet.editor.formatting,
                        list: 'no-icons',
                        options: [
                        'p',
                        'h1',
                        'h2',
                        'h3',
                        'h4',
                        'h5',
                        'h6',
                        'code'
                        ]
                    },
                    {
                        label: $q.lang.editor.fontSize,
                        icon: $q.iconSet.editor.fontSize,
                        fixedLabel: true,
                        fixedIcon: true,
                        list: 'no-icons',
                        options: [
                        'size-1',
                        'size-2',
                        'size-3',
                        'size-4',
                        'size-5',
                        'size-6',
                        'size-7'
                        ]
                    },
                    {
                        label: $q.lang.editor.defaultFont,
                        icon: $q.iconSet.editor.font,
                        fixedIcon: true,
                        list: 'no-icons',
                        options: [
                        'default_font',
                        'arial',
                        'arial_black',
                        'comic_sans',
                        'courier_new',
                        'impact',
                        'lucida_grande',
                        'times_new_roman',
                        'verdana'
                        ]
                    },
                    'removeFormat'
                    ],
                    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                    ['undo', 'redo'],
                    ['viewsource']
                ]"
                :fonts="{
                    arial: 'Arial',
                    arial_black: 'Arial Black',
                    comic_sans: 'Comic Sans MS',
                    courier_new: 'Courier New',
                    impact: 'Impact',
                    lucida_grande: 'Lucida Grande',
                    times_new_roman: 'Times New Roman',
                    verdana: 'Verdana'
                }"
                />
                </div>
          <!-- End Code for Kitchen sink-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    
    <!-- End fourth Kitchen sink -->



    <!-- Five card for Custom style-->
       <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Custom style</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for Custom style-->
            <div class="q-gutter-sm">
            <q-editor
            v-model="editor"
            flat
            content-class="bg-amber-3"
            toolbar-text-color="white"
            toolbar-toggle-color="yellow-8"
            toolbar-bg="primary"
            :toolbar="[
                ['bold', 'italic', 'underline'],
                [{
                label: $q.lang.editor.formatting,
                icon: $q.iconSet.editor.formatting,
                list: 'no-icons',
                options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
                }]
            ]"
            />
        </div>
          <!-- End Code for Custom style-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End Five card for Custom style-->

    <!-- six card for Using toolbar slots -->
      <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Using toolbar slots</div>
         
        </q-card-section>

        <q-card-section>
          <!-- Code for Using toolbar slots-->
            <div class="q-gutter-sm">
                <q-editor
                v-model="editor"
                ref="editor"
                toolbar-text-color="white"
                toolbar-toggle-color="yellow-8"
                toolbar-bg="primary"
                :toolbar="[
                    ['token'],
                    ['bold', 'italic', 'underline'],
                    [{
                    label: $q.lang.editor.formatting,
                    icon: $q.iconSet.editor.formatting,
                    list: 'no-icons',
                    options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
                    }]
                ]"
                >
                <template v-slot:token>
                    <q-btn-dropdown
                    dense no-caps
                    ref="token"
                    no-wrap
                    unelevated
                    color="white"
                    text-color="primary"
                    label="Token"
                    size="sm"
                    >
                    <q-list dense>
                        <q-item tag="label" clickable @click="add('email')">
                        <q-item-section side>
                            <q-icon name="mail" />
                        </q-item-section>
                        <q-item-section>Email</q-item-section>
                        </q-item>
                        <q-item tag="label" clickable @click="add('title')">
                        <q-item-section side>
                            <q-icon name="title" />
                        </q-item-section>
                        <q-item-section>Title</q-item-section>
                        </q-item>
                    </q-list>
                    </q-btn-dropdown>
                </template>
                </q-editor>
            </div>
          <!-- End Code for Using toolbar slots-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- End six card for Using toolbar slots-->


    <!-- seven card for Paste Event Override-->
    <div class="row items-start q-mt-md">
      <q-card class="my-card text-gray" v-if="isshowprop">
        <q-card-section class="row">
          <div class="text-h6">Paste Event Override</div>
         
        </q-card-section>

        <q-card-section>
             <!-- Code for Paste Event Override-->
        <div class="q-gutter-sm">
            <form
            autocorrect="off"
            autocapitalize="off"
            autocomplete="off"
            spellcheck="false"
            >
            <q-editor
                ref="editor_ref"
                @paste.native="evt => pasteCapture(evt)"
                v-model="editor3"
            />
            </form>
        </div>
          <!-- Code for Paste Event Override-->
          
          <!-- End Code for Paste Event Override-->
        </q-card-section>

        <q-separator dark />
      </q-card>
    </div>
    <!-- ----------End seven card for Paste Event Override--------------- -->




  </q-page>
</template>

<script>
export default {
  data() {
    return {
      isshowprop: true,
      editor: 'What you see is <b>what</b> you get.',
       editor2: 'After you define a new button,' +
        ' you have to make sure to put it in the toolbar too!',
          qeditor: '<pre>Check out the two different types of dropdowns' +
        ' in each of the "Align" buttons.</pre> ',
         editor3: 'Try pasting some rich text here,' +
        ' such as from Discord or Webstorm.' +
        '<br/>You can\'t paste images either!!!',

    
      
    };
  },
  methods: {
    closefun() {
      this.isshowprop = false;
    
  },
  saveWork () {
      this.$q.notify({
        message: 'Saved your text to local storage',
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done'
      })
    },
    uploadIt () {
      this.$q.notify({
        message: 'Server unavailable. Check connectivity.',
        color: 'red-5',
        textColor: 'white',
        icon: 'warning'
      })
    }, add (name) {
      const edit = this.$refs.editor
      this.$refs.token.hide()
      edit.caret.restore()
      edit.runCmd('insertHTML', `&nbsp;<div class="editor_token row inline items-center" contenteditable="false">&nbsp;<span>${name}</span>&nbsp;<i class="q-icon material-icons cursor-pointer" onclick="this.parentNode.parentNode.removeChild(this.parentNode)">close</i></div>&nbsp;`)
      edit.focus()
    },
   
    pasteCapture (evt) {
      let text, onPasteStripFormattingIEPaste
      evt.preventDefault()
      if (evt.originalEvent && evt.originalEvent.clipboardData.getData) {
        text = evt.originalEvent.clipboardData.getData('text/plain')
        this.$refs.editor_ref.runCmd('insertText', text)
      }
      else if (evt.clipboardData && evt.clipboardData.getData) {
        text = evt.clipboardData.getData('text/plain')
        this.$refs.editor_ref.runCmd('insertText', text)
      }
      else if (window.clipboardData && window.clipboardData.getData) {
        if (!onPasteStripFormattingIEPaste) {
          onPasteStripFormattingIEPaste = true
          this.$refs.editor_ref.runCmd('ms-pasteTextOnly', text)
        }
        onPasteStripFormattingIEPaste = false
      }
    }
  }
};
</script>

<style scoped>
.my-card {
  width: 100%;
}

</style>