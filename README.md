# `@exodus/rpc-websockets`

A fork of `rpc-websockets`.

## Changes from upstream

1. Server implementation dropped.

2. Don't pollute globals with regenerator.

3. Map for queue.

4. Prefer browser version when a global `WebSocket` is available (can be determined at bundle time).

5. Fix ts target.

## License

This library is licensed under LGPLv3. Please see [LICENSE](LICENSE) for licensing details.
