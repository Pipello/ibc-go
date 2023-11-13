package types

import (
	"bytes"
	"encoding/hex"

	errorsmod "cosmossdk.io/errors"
	storetypes "cosmossdk.io/store/types"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// MigrateContract calls the migrate entry point on the contract with the given
// migrateMsg. The contract must exist and the code hash must have alread been stored
// via StoreCode. If the code hash is the same as the current code hash, an error is returned.
// This does not update the code hash in the client state.
func (cs ClientState) MigrateContract(
	ctx sdk.Context, cdc codec.BinaryCodec, clientStore storetypes.KVStore,
	clientID string, newCodeHash, migrateMsg []byte,
) error {
	if bytes.Equal(cs.CodeHash, newCodeHash) {
		return errorsmod.Wrapf(ErrWasmCodeExists, "new code hash (%s) is the same as current code hash (%s)", hex.EncodeToString(newCodeHash), hex.EncodeToString(cs.CodeHash))
	}

	// update the code hash, this needs to be done before the contract migration
	// so that wasmMigrate can call the right code. Note that this is not
	// persisted to the client store.
	cs.CodeHash = newCodeHash

	err := wasmMigrate(ctx, clientStore, &cs, clientID, migrateMsg)
	if err != nil {
		return err
	}

	return nil
}
