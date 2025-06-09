const WebSocket = require('ws');
const http = require('http');

// HTTP 서버 생성
const server = http.createServer();

// WebSocket 서버 생성
const wss = new WebSocket.Server({ server });

// 연결된 클라이언트 저장
const clients = new Set();

// WebSocket 연결 처리
wss.on('connection', (ws) => {
  // 새 클라이언트 추가
  clients.add(ws);
  console.log('클라이언트 연결됨');

  // 클라이언트로부터 메시지 수신
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    console.log('받은 메시지:', data);

    // 모든 클라이언트에게 메시지 브로드캐스트
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            type: 'message',
            data: data,
          }),
        );
      }
    });
  });

  // 연결 종료 처리
  ws.on('close', () => {
    clients.delete(ws);
    console.log('클라이언트 연결 종료');
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`WebSocket 서버가 ws://localhost:${PORT} 에서 실행 중입니다.`);
});
