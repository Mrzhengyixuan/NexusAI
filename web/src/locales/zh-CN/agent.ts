export default {
    // 'agent': 'agent',
    'agent': '智能体',
    'agent.menu.basicsetup': '基本设置',
    'agent.menu.Capacityoutput': '能力和输出',
    'agent.menu.operation': '调试',
    'agent.allability': '默认所有能力',

    'agent.menu': '默认',
    'agent.message.success.save': '保存成功',
    'agent.message.success.runpublish': '运行成功',
    'agent.message.listwarning': '您正在查看已发布版本数据，不可修改',
    'agent.message.warning.variable': '请定义变量名',
    'agent.message.warning.LLM': '选择LLM模型',
    'agent.message.warning.functiondescribe': '请填写职能描述',
    'agent.message.warning.completevariable': '请填写完整变量',
    'agent.message.warning.repetition': 'KeyName不能重复',
    'agent.message.warning.integritycapacity': '请填写完整能力',
    'agent.message.warning.selectivepower': '请选择能力',
    'agent.message.warning.selectknowledgebase': '请检查能力名称或描述是否未填写',
    'agent.message.warning.callword': '请输入提示词内容',
    'agent.message.warning.datatype': '数据类型为number的请输入数字',

    'agent.back': '返回创造',
    'agent.back_meeting': '返回会议室',
    'agent.visit': '访问',
    'agent.appname': '智能体名称',
    'agent.cannotmodify': '(您正在查看已发布版本数据，无法修改)',
    'agent.appdescription': '智能体描述',
    'agent.teamvisibility': '是否团队可见',
    'agent.APIswitch': '是否开启API',
    'agent.filesupload': '是否允许上传文件',
    'agent.LLMmodel': 'LLM模型',
    'agent.pleaseselect': '请选择',
    'agent.functiondescription': '职能描述',
    'agent.inputvariable': '输入变量',
    'agent.add': '添加',
    'agent.associatedknowledgebase': '关联知识库',
    'agent.defaultoutputformat': '默认输出格式',
    'agent.variable.name': '变量名',
    'agent.variable.value': '变量内容',
    'agent.variable.required.value': '变量内容(必填项)',
    'agent.variable.display': '显示名',
    'agent.variable.type': '类型',
    'agent.variable.required': '是否必填',
    'agent.variable.operation': '操作',
    'agent.rules.name': '请填写变量名',
    'agent.rules.displayname': '请填写显示名',
    'agent.rules.verifydescription': '只能包含字母、数字和下划线',
    'agent.rules.veriablevalue': '请填写变量内容',
    'agent.rules.callwordvalue': '请填写提示词内容',
    'agent.Applicationcapabilitysetting': '应用能力设置',
    'agent.automatch': '是否自动匹配能力',
    'agent.capability': '创建智能体能力',
    'agent.capabilityname': '能力名称',
    'agent.capabilitydescription': '能力描述',
    'agent.capabilitystatus': '能力状态',
    'agent.capabilitystatus.enable': '开启',
    'agent.capabilitystatus.disable': '关闭',
    'agent.enableall': '能力输出格式',
    'agent.operationrun': '调试运行',
    'agent.selectivepower': '选择能力',
    'agent.runpreview': '运行预览',
    'agent.amend': '去修改',
    'agent.publish': '发布',
    'agent.havepublished': '已发布',
    'agent.unpublish': '未发布',
    'agent.agents': '的智能体',
    'agent.compile': '编辑',
    'agent.created': '创造',
    'agent.btn.nextstep': '下一步',
    'agent.btn.back': '取消',
    'agent.btn.savedebug': '保存并调试',

    'agent.explain.teamvisibility': 'agent发布后团队内其他成员也可以使用',
    'agent.explain.function':
        'agent自身具体的职能范围，作为提示词，让大语言模型更好的处理任务或回答问题',
    'agent.explain.inputvariable':
        '变量以表单形式填写或者引入（在工作流中可引入上游节点的输出变量），运行时将自动替换提示词中的变量',
    'agent.explain.associatedknowledgebase':
        '运行agent时使用用户输入的提示词在指定知识库中查询相关内容，查询结果作为提示词提供给大语言模型',
    'agent.explain.capabilitydescription':
        '决定agent处理特定任务时的输出范围，运行agent时作为提示词作为提示词提供给大语言模型',
    'agent.explain.automatch':
        '运行agent时若不指定某个能力，所有能力都将作为提示词提供给大语言模型，开启此开关后，大语言模型将会根据上下文内容选择最适合的某个能力',
};
// {intl.formatMessage({ id: 'agent.btn.back' })}