"use client";
import React from 'react';
import { Button } from 'shared';

export function SharedButtonDemo() {
  return (
    <Button
      style={{ marginLeft: 12 }}
      onClick={() => alert('Botão compartilhado do LOGIN!')}
      label="Shared Button"
    />
  );
}

