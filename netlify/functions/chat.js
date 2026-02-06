/**
 * Netlify Serverless Function - Chat API
 * 使用 DeepSeek AI 大语言模型
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

    // 获取 DeepSeek API Key（从环境变量）
    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'API key not configured',
          message: '请在 Netlify 环境变量中配置 DEEPSEEK_API_KEY'
        })
      };
    }

    // 调用 DeepSeek API
    const deepseekResponse = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `你是 Codex 学习助手，专门帮助用户理解从 Vibe Coding 到 SDD 的过渡过程。

你的核心职责是帮助用户掌握三个关键能力：
1. 作用域意识（Scope）- 明确"只改哪里"
2. 不变量意识（Invariant）- 明确"哪些绝对不能动"  
3. 验收意识（Acceptance Criteria）- 明确"什么才算改对"

回答要点：
- 用具体的 Prompt 示例说明
- 强调工程思维而非单纯技巧
- 引导用户从"写代码"转向"对修改负责"
- 保持简洁，避免过度技术化

语言风格：友好、专业、启发性`
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!deepseekResponse.ok) {
      const errorData = await deepseekResponse.json();
      throw new Error(`DeepSeek API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await deepseekResponse.json();
    const reply = data.choices[0]?.message?.content || '抱歉，我无法生成回复。';

    const response = {
      reply: reply,
      model: 'deepseek-chat',
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
