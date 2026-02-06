/**
 * Netlify Serverless Function - Chat API
 * 
 * 这是一个预留的聊天接口，可以用于未来集成 AI 对话功能
 * 目前返回示例响应
 */

exports.handler = async (event, context) => {
  // 设置 CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // 处理 OPTIONS 请求（CORS 预检）
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // 只接受 POST 请求
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { message, context: userContext } = JSON.parse(event.body);

    // 验证输入
    if (!message || typeof message !== 'string') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid message format' })
      };
    }

    // 示例响应 - 实际项目中这里可以接入 AI API
    const response = {
      reply: generateCodexResponse(message),
      timestamp: new Date().toISOString()
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response)
    };

  } catch (error) {
    console.error('Chat function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      })
    };
  }
};

/**
 * 生成 Codex 风格的示例响应
 * 在实际应用中，这里可以调用 OpenAI/Anthropic API
 */
function generateCodexResponse(message) {
  const lowerMessage = message.toLowerCase();

  // 关键词匹配示例响应
  if (lowerMessage.includes('scope') || lowerMessage.includes('作用域')) {
    return '作用域（Scope）是 Codex 的核心概念之一。它要求你在修改代码时明确指出"只改哪里"。\n\n示例 Prompt：\n"请只修改 handleSubmit() 函数，其余代码一律不要改。"\n\n这样可以防止 AI 进行不必要的全局重构。';
  }

  if (lowerMessage.includes('invariant') || lowerMessage.includes('不变量')) {
    return '不变量（Invariant）是指在修改过程中绝对不能改变的部分。\n\n示例 Prompt：\n"以下内容视为不变量：UI 结构、CSS 类名、已有 API 接口。请在此约束下完成修改。"\n\n明确不变量可以保护系统的稳定性。';
  }

  if (lowerMessage.includes('acceptance') || lowerMessage.includes('验收')) {
    return '验收标准（Acceptance Criteria）定义了"什么才算改对"。\n\n示例 Prompt：\n"修改完成后应满足：1) 失败时显示错误提示 2) 成功时跳转到首页 3) 加载时显示 loading 状态"\n\n清晰的验收标准能让 AI 理解你的真实需求。';
  }

  if (lowerMessage.includes('vibe coding')) {
    return 'Vibe Coding 是用自然语言快速生成可运行代码的方法。但它的局限在于：\n\n- 能生成，但不敢改\n- 一改就崩\n- 缺乏工程约束\n\nCodex 正是为了解决这些问题而存在的过渡阶段。';
  }

  if (lowerMessage.includes('sdd')) {
    return 'SDD (Spec Driven Development) 是 Codex 之后的下一步。\n\n当你习惯了用"只、不要、不影响"这些词描述需求时，你就已经在用 Spec 的语言思考了。\n\nSDD 要做的是把这些约束从"对 AI 说"升级为"写进文档"。';
  }

  // 默认响应
  return '感谢你的提问！Codex 的核心是帮助你在修改代码时保持控制力。\n\n三个关键概念：\n1. 作用域 - 明确改哪里\n2. 不变量 - 明确不能动什么\n3. 验收标准 - 明确什么算成功\n\n你可以问我关于这些概念的具体问题，或者询问如何在实际项目中应用 Codex 思维。';
}
